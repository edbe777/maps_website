var {{ printf "track_%s" (md5 .Content) | safeJS }} = toGeoJSON.kml(new DOMParser().parseFromString(`{{ .Content }}`, "text/xml"));