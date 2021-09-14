'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Méthode d'aide pour définir des associations.
     *Cette méthode ne fait pas partie du cycle de vie de Sequelize.
     *Le fichier `models/index` appellera cette méthode automatiquement.
     */
    static associate (models) {
      Likes.belongsTo(models.User, { foreignKey: 'userId' })
      Likes.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Likes.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Likes'
    }
  )

  Likes.afterCreate(async like => {
    const post = await like.getPost()
    await post.update({
      likesCount: post.likesCount + 1
    })
  })
  Likes.afterDestroy(async like => {
    const post = await like.getPost()
    post.update({
      likesCount: post.likesCount - 1
    })
  })

  Likes.afterCreate(async like => {
    const post = await like.getPost()
    const user = await like.getUser()

    if (user.id == post.userId) return
  })

  return Likes
}
