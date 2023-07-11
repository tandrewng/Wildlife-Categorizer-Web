import { client } from "@gradio/client";
async function loaded(reader) {
  const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
  const exampleImage = await response_0.blob();						
  const app = await client("https://tandrewng-wildlife-categorizer.hf.space/");
  const result = await app.predict("/predict", [
    photo.files[0], 	// blob in 'img' Image component	
  ]);
}
function read() {
  const reader = new FileReader();
  reader.addEventListener('load', () => loaded(reader))
  reader.readAsDataURL(photo.files[0]);
}
photo.addEventListener('input', read);