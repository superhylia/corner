import Image from "@11ty/eleventy-img"; // import eleventy image

// create a new image, copy it to the output folder and return the output path
const processOGImage = async (image) => {
  // use eleventy image to process the image
  let imageObj = await Image(image, {
    outputDir: "assets/images/og-images/", // set the output directory
    formats: ["jpeg"], // choose which formats to output
    // add any other eleventy image options here sizing, etc 
    // see https://www.11ty.dev/docs/plugins/image/
  });
  return imageObj.jpeg[0].url; // return the output path of fist jpeg created
}

export default {
    ogImage: (data) => {
      if (data?.image) {     // check that the image metadata exists
        const inputPath = data.eleventy.directories.input // get your src folder
        const imagePath = `${inputPath}${data.image}` // get the image path
        return processOGImage(imagePath)
      }
    },
};
