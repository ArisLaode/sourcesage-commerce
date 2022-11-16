from flask_marshmallow import Marshmallow

ma = Marshmallow()


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'images', 'logo_id')


class VariantsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'product_id', 'name', 'size', 'color', 'images')


product_schema_by_id = ProductSchema()
product_schema = ProductSchema(many=True)

variants_schema_by_id = VariantsSchema()
variants_schema = VariantsSchema(many=True)
