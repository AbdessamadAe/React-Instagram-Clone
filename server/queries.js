const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Project',
  password: 'password',
  port: 5432,
})

const getPosts = (request, response) => {
  pool.query('SELECT post.*, a.user_name FROM  post NATURAL JOIN account a', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createPost = (request, response) => {
  const { post_id, post_date , picture, caption, account_id, likes } = request.body

  pool.query('INSERT INTO post (post_id, post_date , picture, caption, account_id, likes ) VALUES (6, "2002-1-1","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "Nature",1, 23000)', [post_id, post_date , picture, caption, account_id, likes], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('PostAdded')
  })
}
module.exports = {
  getPosts,
  createPost
}
