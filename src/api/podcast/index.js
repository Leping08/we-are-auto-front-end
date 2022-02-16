// Functions related to getting and formatting the podcast data
const PODCAST_DATA_URL = "https://weareauto.libsyn.com/rss";

const xmlToJson = (xml) => {
  // Create the return object
  let obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};

//Get all the episodes for the we are auto podcast
const all = async () => {
  return await fetch(PODCAST_DATA_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      console.log(data);
      return xmlToJson(data);
    });
};

const find = async (id) => {
  const podcasts = await all();
  const index = podcasts?.rss?.channel?.item.length - id;
  return podcasts?.rss?.channel?.item[index];
};

export { xmlToJson, all, find };
