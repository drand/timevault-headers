export default {
    async fetch(request: Request): Promise<Response> {
        const response = await fetch(request)
        const copy = new Response(response.body, response)

        copy.headers.append("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        copy.headers.append("X-Frame-Options", "DENY")
        copy.headers.append("Permissions-Policy", "geolocation=(), camera=(), accelerometer=(), camera=(), display-capture=(), gyroscope=(), microphone=(), magnetometer=(), payment=(), usb=(), xr-spatial-tracking=()")
        copy.headers.append("Content-Security-Policy", "default-src 'self' api.drand.sh; img-src 'self';")

        return copy
    },
};
