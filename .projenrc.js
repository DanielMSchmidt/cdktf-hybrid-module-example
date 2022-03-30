const { HybridModule } = require("projen-cdktf-hybrid-construct");
const project = new HybridModule({
  name: "cdktf-hybrid-module-example",
  repository: "github.com/DanielMSchmidt/cdktf-hybrid-module-example",
  author: "Daniel Schmidt",

  devDeps: ["projen-cdktf-hybrid-construct"],
});
project.synth();
