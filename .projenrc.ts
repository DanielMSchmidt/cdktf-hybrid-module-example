import { HybridModule } from "projen-cdktf-hybrid-construct";

const project = new HybridModule({
  name: "cdktf-hybrid-module-example",
  repository: "github.com/DanielMSchmidt/cdktf-hybrid-module-example",
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  repositoryUrl: "github.com/DanielMSchmidt/my-module",
  terraformExamples: {
    enabled: true,
    folder: "terraform",
    providerConfig: `
    terraform {
      # Limit provider version (some modules are not compatible with aws 4.x)
      required_providers {
        aws = {
          source  = "hashicorp/aws"
          version = "~> 3.74"
        }
      }
      # Terraform binary version constraint
      required_version = "~> 1.1.0"
    }
    
    
    provider "aws" {
      region = "eu-central-1"
    }
    `,
  },
  constructExamples: {
    enabled: true,
    folder: "construct-examples",
  },
  cdktfVersion: "0.10.1",
  constructVersion: "10.0.107",
  devDeps: ["projen-cdktf-hybrid-construct"],
});
project.synth();
