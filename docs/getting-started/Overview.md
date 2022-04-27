Getting started with Waltz 

Hello World Implementation
The first thing to do is to get Waltz running on your system which will prove out the infrastructure elements.  
For this basic implementation we will simply need a Postgres database server and an application server.  For now we will not not worry about load balancing or scaling the application server as this can easily be extended once we have enough users logging on, but for now we'll keep this simple.
Waltz builds a docker image each time there is a new release so the easiest way of getting the application server up and running is to grab the latest Docker image and run it on your infrastructure.  If you already have K8s running then it should be trivial to write a quick helm chart to run this image.
Have a look at the documentation at 
