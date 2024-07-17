graph codegen && graph build 

graph create --node http://localhost:8020/ simple-storage-subgraph

graph deploy --node http://localhost:8020/ simple-storage-subgraph