# CEEST-GraphQL-Server
GraphQL based Server for CEEST Algorithm 

### Configure your Server using config.json file
```
{
    "server_id":"random-id",
    "server_name":"xnx1",
    "total_mips": 1234567,
    "unit_power_cost": 100
}
```
[ **total_mips (Million Instructions Per Second)** ] - It represents total amount of computer power that server will have. 

[ **unit_power_cost** ]- The cost of electricity required to power a single server unit, such as a rack-mounted server or blade server. This cost can include the cost of the electricity itself, as well as the cost of cooling the server to prevent overheating. It depends on various factor such as location, so it has to configured manually.

### API endpoints to retrive data about task and virtual machines from server / and make mutation if required

You can visulize whole documentation by running this server using
` npm start ` and quering it on any GraphQL [visulizar](https://studio.apollographql.com/sandbox/explorer)



### Set-Up your database for saving virtual machine details and task details.

Include you mongodb uri in `env` file as `DB_URL='your-mongodb-uri-for-accessing-the-database.'`  






