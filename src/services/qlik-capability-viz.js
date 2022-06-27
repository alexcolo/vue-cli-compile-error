export const qlikCapabilityViz = async ({ app, element, options }) => {
  let qVizPromise;
  if (options.id && options.id === "CurrentSelections") {
    qVizPromise = app.getObject(element, "CurrentSelections");
    options.height = 50;
  } else if (options.id) {
    qVizPromise = app.visualization.get(options.id);
  } else {
    qVizPromise = app.visualization.create(
      options.type,
      options.cols,
      options.options
    );
  }
  const qViz = await qVizPromise;
  if (options.id && options.id !== "CurrentSelections") {
    qViz.setOptions(options);
  }

  if (qViz && qViz.show) {
    element.style.height = options.height;
    qViz.show(element, {
      noSelections: options.noSelections,
      noInteraction: options.noInteraction
    });
  }
  return qViz;
};

export default { qlikCapabilityViz };
