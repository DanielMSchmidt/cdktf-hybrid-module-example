const { HybridModule } = require("projen-cdktf-hybrid-construct");
const project = new HybridModule({
  name: "cdktf-hybrid-module-example",

  devDeps: [
    "projen-cdktf-hybrid-construct@file:../projen-cdktf-hybrid-construct",
  ],
});
project.synth();
