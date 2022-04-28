# Getting started with Waltz

## Hello World Implementation

The first thing to do is to get Waltz running on your system which will prove out the infrastructure elements.

For this basic implementation we will simply need a Postgres database server and an application server.  For now we will not not worry about load balancing or scaling the application server as this can easily be extended once we have enough users logging on, but for now we'll keep this simple.

Waltz builds a docker image each time there is a new release so the easiest way of getting the application server up and running is to grab the latest Docker image and run it on your infrastructure.  If you already have K8s running then it should be trivial to write a quick helm chart to run this image.
The documentation at [Docker.md](../..//docker/DOCKER.md) shows the parameters to get it running.  As we are running just one instance of Waltz, we set it to simply update the database and run Waltz application each time it starts up.  Later on when we start scaling out and running multiple instances of Waltz then we can split out the updating of the database and the running of the application, but for this initial "hello world" implementation we will keep it simple.

Once you have the application server running, the first time you run Waltz it will create all the required database tables.


## Authentication

Next we will want to Authenticate users.  The "hello world" implementation uses a basic username and password setup which is fine for a POC, but most Financial Service Organisations will have their own dedicated Authentication services (Active Directory etc.).  For a production instance of Waltz we don't want users to be having to enter their passwords if they are already authenticated, so we should be able to SSO the user seamlessly.

All calls to our K8s pod will come in via an nginx ingress.   [Configuring for use with the Nginx auth_request directive](https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/overview/#configuring-for-use-with-the-nginx-auth_request-directive) allows Nginx to authenticate requests via the oauth2-proxy's /auth endpoint.  We then set a header variable with *auth_request_set*

Now that we have the email address being passed across in a header, we need to change the settings in Waltz to disable the username and password entry and tell Waltz to use Header based authentication and which header contains the users email. See [settings docs](../features/configuration/settings.md#security):

|Setting|Value|
|-------|-----|
|web.authentication|"sso"| 
|server.authentication.filter | "org.finos.waltz.web.endpoints.auth.HeaderBasedAuthenticationFilter"|
|server.authentication.filter.headerbased.param|"X-Auth-Request-Email"|



