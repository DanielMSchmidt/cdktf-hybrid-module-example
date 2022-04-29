import { HybridModule } from "projen-cdktf-hybrid-construct";

const project = new HybridModule({
  name: "cdktf-hybrid-module-example",
  repository: "github.com/DanielMSchmidt/cdktf-hybrid-module-example",
  author: "Daniel Schmidt",
  defaultReleaseBranch: "main",
  authorAddress: "danielmschmidt92@gmail.com",
  repositoryUrl: "github.com/DanielMSchmidt/my-module",
  terraformProvider: "aws",
  terraformExamplesFolder: "terraform",
  terraformProviderAwsConfig: {
    region: "eu-central-1",
    requiredProviderVersion: "3.74",
  },

  devDeps: ["projen-cdktf-hybrid-construct"],
});
project.synth();
