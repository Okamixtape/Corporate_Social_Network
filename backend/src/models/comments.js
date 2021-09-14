'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Méthode d'aide pour définir des associations.
     *Cette méthode ne fait pas partie du cycle de vie de Sequelize.
     *Le fichier `models/index` appellera cette méthode automatiquement.
     */
    static associate (models) {
      Comments.belongsTo(models.User, { foreignKey: 'userId' })
      Comments.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Comments.init(
    {
      postId: DataTypes.INTEGER,
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Comments'
    }
  )

  Comments.afterCreate(async comment => {
    const post = await comment.getPost()
    const user = await comment.getUser()

    if (user.id == post.userId) return

  })

  return Comments
}
