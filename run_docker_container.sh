container_name="dicetables_server"
image_name="dt_flask"
if [[ -z "${1}" ]]; then
    echo needs a version number
    exit 1
fi

version="${1}"
port="8080"

docker stop "${container_name}"

docker rm "${container_name}"
docker run -p "${port}":"${port}" --name "${container_name}"  "${image_name}:${version}"
