export default function createHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");

  h1.textContent = "Get your $hit together";
  header.append(h1);

  return header;
}
