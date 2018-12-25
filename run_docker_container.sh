container_name="dicetables_server"
image_name="dt_flask"
port="8080"

docker stop "${container_name}"

docker rm "${container_name}"
docker run -p "${port}":"${port}" --name "${container_name}"  "${image_name}"
