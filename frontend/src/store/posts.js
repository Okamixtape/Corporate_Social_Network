import { apiClient } from '../services/ApiClient'

export default {
  state: {
    errorMessage: '',
    messageAlert: '',
    page: 1,
    isOnLastPage: false,
    list: []
  },
  mutations: {
    UPDATE_POSTS_LIST (state, posts) {
      state.list = posts
    },
    ERROR_MESSAGE (state, message) {
      state.message = message
    },
    INCREMENT_PAGE (state) {
      state.page++
    },
    REACHED_LAST_PAGE (state) {
      state.isOnLastPage = true
    },
    REMOVE_POST (state, postId) {
      state.list = state.list.filter(post => post.id !== postId)
    },
    UPDATE_ONE_POST (state, modifiedPost) {
      const postIndex = state.list.findIndex(
        post => post.id === modifiedPost.id
      )
      state.list[postIndex] = modifiedPost
      state.list = [...state.list]
    },
    CREATE_POST (state, newPost) {
      state.list.unshift(newPost)
      state.list = [...state.list]
    }
  },
  actions: {
    fetchPosts ({ state, commit }) {
      return apiClient
        .get(`api/posts?page=${state.page}`)
        .then(response => {
          if (response.posts) {
            commit('UPDATE_POSTS_LIST', state.list.concat(response.posts))
          }
        })
        .catch(() => {
          commit('ERROR_MESSAGE', 'Problème de connexion')
        })
    },
    async loadMore ({ state, commit, dispatch }) {
      if (state.isOnLastPage) return

      commit('INCREMENT_PAGE')
      const initialLength = state.list.length

      await dispatch('fetchPosts')

      if (state.list.length === initialLength) {
        commit('REACHED_LAST_PAGE')
      }
    },
    deletePost ({ state, commit }, postId) {
      apiClient
        .delete('api/posts/' + postId)
        .then(() => commit('REMOVE_POST', postId))
        .catch(error => {
          console.log({ error: error })
          commit('ERROR_MESSAGE', 'Problème de connexion')
        })
    },
    modifyPost ({ state, commit }, { postId, selectedFile, content }) {
      let body = {
        content: content
      }

      const isFormData = !!selectedFile

      if (isFormData) {
        const formData = new FormData()
        formData.append('image', selectedFile)
        formData.append('post', JSON.stringify(body))
        body = formData
      }
      apiClient
        .put('api/posts/' + postId, body, { isFormData })
        .then(response => {
          commit('UPDATE_ONE_POST', response.post)
        })
    },
    createPost ({ state, commit }, { selectedFile, content }) {
      let body = {
        content: content
      }
      const isFormData = !!selectedFile

      if (isFormData) {
        const formData = new FormData()
        formData.append('image', selectedFile)
        formData.append('post', JSON.stringify(body))
        body = formData
      }
      apiClient.post('api/posts/', body, { isFormData }).then(response => {
        console.log(response)
        commit('CREATE_POST', response.post)
      })
    }
  },
  modules: {}
}