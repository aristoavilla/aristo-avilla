const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function convertImages() {
  const inputDir = path.resolve("movethistoappropriatefolder");
  const outputDir = path.resolve("public", "images");

  if (!fs.existsSync(inputDir)) {
    throw new Error(`Input directory not found: ${inputDir}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.toLowerCase().endsWith(".png"));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.png$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath).webp({ quality: 85, effort: 6 }).toFile(outputPath);

    const inputSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
    const outputSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`${file} (${inputSize} KB) -> ${outputName} (${outputSize} KB)`);
  }
}

convertImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
