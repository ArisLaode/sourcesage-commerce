// const baseUrl = "/service"
const baseUrl = "http://127.0.0.1:8082"
const createProduct = `${baseUrl}/api/v1/products/create`
const readProduct = `${baseUrl}/api/v1/products/read`
const readVariant = `${baseUrl}/api/v1/variants/read`

export {
    readProduct,
    readVariant,
    createProduct
}
