const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', () => {

  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    ]
})
});

router.get('/:id', (req) => {

  Tag.findOne({
    where:{
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    ]
})
});

router.post('/', (req) => {

  Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req) => {
  
    Tag.update(
      {
        tag_name:req.body.tag_name
      },
      {
        where:{
          id: req.params.id
        }
      }
    )
});

router.delete('/:id', (req) => {
  Tag.destroy({
    where:{
      id: req.params.id
    }
  })
});

module.exports = router;
