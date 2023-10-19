set -x 
NS=musicstore-dev
tanzu apps workload apply --file config/workload.yaml --namespace ${NS}  --debug --yes --local-path . --live-update --tail --update-strategy replace 
