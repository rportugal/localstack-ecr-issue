import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";

const repository = new awsx.ecr.Repository("myrepo", { forceDelete: true });

const img = new awsx.ecr.Image("myimage", {
  repositoryUrl: repository.url,
  path: "../",
});
