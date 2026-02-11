class BskyComments extends HTMLElement {

  constructor() {
    super();
    // SVGs
    this.heart  = '<svg xmlns="http://www.w3.org/2000/svg" fill="var(--color-primary)" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-primary)" style="var(--space-l); vertical-align:middle;"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>';
    this.repost = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-quaternary)" style="var(--space-l); vertical-align:middle;"><path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>`;
    this.reply  = `<svg xmlns="http://www.w3.org/2000/svg" fill="var(--color-secondary)" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-secondary)" style="var(--space-l); vertical-align:middle;"><path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"></path></svg>`;

    this.postTemplate = null;
    this.headerTemplate = null;
    this.hostAuthor = ""; // Store this at class level
  }

  escapeHTML(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  convertURI(uri) {
    return uri.replace("at://", "https://bsky.app/profile/").replace("/app.bsky.feed.post/", "/post/");
  }

  async fetchComments(postId) {
    const API_URL = "https://api.bsky.app/xrpc/app.bsky.feed.getPostThread";
    try {
      const response = await fetch(`${API_URL}?uri=${encodeURIComponent(postId)}`);
      if (!response.ok) throw new Error("Failed to fetch comments");
      return await response.json();
    } catch (error) {
      console.error("Error fetching comments:", error);
      return null;
    }
  }

  renderEmbeds(embed) {
    const embedBox = document.createElement("div");
    if (embed && embed.$type === "app.bsky.embed.images#view") {
    const images = embed.images;
    if (images && images.length > 0) {
      // Add 'display: flex' and 'flex-wrap: wrap' for stacking
      embedBox.classList.add("comment-imagebox");
      embedBox.style = "display: flex; flex-wrap: wrap; gap: var(--space-xs); margin-top: var(--space-xs); width: 100%;";
      
      images.forEach(image => {
        const link = document.createElement("a");
        link.href = image.fullsize;
        link.target = "_blank";
        link.style = "flex: 1 1 200px; min-width: 0; max-width:"
        link.innerHTML = `<img src="${image.thumb}" alt="${image.alt || ''}" class="comment-image" style="flex: 1 1 200px; max-width: 100%; height: auto; border-radius: 8px;">`;
        embedBox.appendChild(link);
      });
      }
    }
    
      return embedBox;
    }

  renderPost(comment) {
    const post = document.createElement("div");
    post.classList.add("comment-box");
    
    const author = comment.post?.author ?? comment.record?.author ?? "";
    const record = comment.post?.record ?? comment.record?.value ?? "";
    const embeds = comment.post?.embed ?? (comment.record?.embeds ? comment.record.embeds[0] : "");
    const uri = comment.post?.uri ?? comment.record?.uri ?? "";

    if (author.displayName === this.hostAuthor) {
      post.classList.add("comment-host");
    }

    const embedsHTML = this.renderEmbeds(embeds)?.outerHTML || "";

    post.innerHTML = `
      <div class="comment-innerbox">
        <img class="comment-avatar" src="${author.avatar || ''}">
        <div>
          <span class="comment-meta">
            By <a href="https://bsky.app/profile/${author.handle}">${this.escapeHTML(author.displayName || author.handle)}</a>
            on <a href="${this.convertURI(uri)}">${new Date(record?.createdAt || Date.now()).toLocaleString()}</a>
          </span>
          <p class="comment-text">${this.escapeHTML(record?.text || "")}</p>
        </div>
      </div>
      ${embedsHTML}`;

    return post;
  }

  renderComments(comments, container, hiddenReplies) {
    comments.forEach(reply => {
      if (hiddenReplies.includes(reply.post.uri)) return;

      const commentEl = this.renderPost(reply);
      container.appendChild(commentEl);

      if (reply.replies && reply.replies.length > 0) {
        const subContainer = document.createElement("div");
        subContainer.classList.add("comment-replies");
        subContainer.style.marginLeft = "20px";
        this.renderComments(reply.replies, subContainer, hiddenReplies);
        container.appendChild(subContainer);
      }
    });
  }

  async loadComments(rootPostId, options = {}) {
    const container = document.getElementById("comments-container");
    const commentData = await this.fetchComments(rootPostId);

    if (commentData && commentData.thread) {
      this.hostAuthor = commentData.thread.post.author.displayName;
      const commentHidden = commentData.threadgate?.record?.hiddenReplies || [];

      // Render Metrics
      container.innerHTML = `
        <div class="comment-metricsbox" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: var(--space-s); margin-bottom: 20px;">
    
        <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
          <h3>Comments</h3>
          <a href="${this.convertURI(rootPostId)}" target="_blank" style="font-size: var(--size-step-min-1);">
            Reply to this post on BlueSky to comment.
          </a>
        </div>

        <div style="display: flex; gap: var(--space-s); flex-wrap: wrap;">
          <span class="comment-metrics">${this.heart} ${commentData.thread.post.likeCount} Likes</span>
          <span class="comment-metrics">${this.repost} ${commentData.thread.post.repostCount} Reposts</span>
          <span class="comment-metrics">${this.reply} ${commentData.thread.post.replyCount} Replies</span>
        </div>

      </div>`;  

      if (commentData.thread.replies) {
        this.renderComments(commentData.thread.replies, container, commentHidden);
      }
    }
  }

  async loadCommentsURL(url, options = {}) {
    const API_URL = "https://bsky.social/xrpc/com.atproto.identity.resolveHandle";
    const parts = url.split("/profile/")[1].split("/post/");
    const handle = parts[0];
    const postId = parts[1];

    const res = await fetch(`${API_URL}?handle=${encodeURIComponent(handle)}`);
    const { did } = await res.json();
    this.loadComments(`at://${did}/app.bsky.feed.post/${postId}`, options);
  }
}

// Global Definitions OUTSIDE the class
customElements.define('bsky-comments', BskyComments);
const bsky = new BskyComments();
window.loadCommentsURL = bsky.loadCommentsURL.bind(bsky);