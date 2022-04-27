# Getting started with Waltz

## Hello World Implementation

The first thing to do is to get Waltz running on your system which will prove out the infrastructure elements.

For this basic implementation we will simply need a Postgres database server and an application server.  For now we will not not worry about load balancing or scaling the application server as this can easily be extended once we have enough users logging on, but for now we'll keep this simple.

Waltz builds a docker image each time there is a new release so the easiest way of getting the application server up and running is to grab the latest Docker image and run it on your infrastructure.  If you already have K8s running then it should be trivial to write a quick helm chart to run this image.

Have a look at the documentation at [/docker/DOCKER.md] for how to update and run the application.


## Authentication

Next we will want to Authenticate users.  Most Financial Service Organisations will be able to perform SSO and so maintaing a seperate set of user login details with the attendant issues around password resetting and security can be abstracted away.

As we are deploying on K8s, the simplest solution Sidecar Proxy to intercept all calls to the application and use that to Authenticate the user.  If the user is signed in then we will add a standard JWT (JSON Web Token) to the Authentication header and pass that to Waltz. 
This is generally described in the [settings docs](https://github.com/finos/waltz/blob/master/docs/features/configuration/settings.md#security) and a more complete example of what NatWest has also been [written up](https://github.com/finos/waltz/blob/master/docs/integration/external-authentication/external-authentication.md). 
