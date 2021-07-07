// NFT picture frame
const entity = new Entity();
const shapeComponent = new NFTShape('INSERT NFT ADDRESS HERE', Color3.Blue());
entity.addComponent(
  new Transform({
    position: new Vector3(4, 1.5, 4),
  })
);
engine.addEntity(entity);

// fixed wall
const wall1 = new Entity();
wall1.addComponent(
  new Transform({
    position: new Vector3(4, 1, 4.1),
    scale: new Vector3(4, 3, 0.05),
  })
);
wall1.addComponent(new BoxShape());
engine.addEntity(wall1);

const wall2 = new Entity();
wall2.addComponent(
  new Transform({
    position: new Vector3(4, 1, 11),
    scale: new Vector3(4, 3, 0.05),
  })
);
wall2.addComponent(new BoxShape());
engine.addEntity(wall2);
