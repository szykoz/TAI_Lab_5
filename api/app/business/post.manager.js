'use strict';

import postDAO from '../DAO/postDAO';

function create(context) {
  async function query() {
    let result = postDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
      if (result) {
        return mongoConverter(result);
      }
    });
  }

  async function createNewOrUpdate(data) {
    let result = await postDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  async function search(content) {
    return PostModel.find(content).then(function (result) {
      if (result) {
        return mongoConverter(result);
      }
    });
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
  };
}

export default {
  create: create
};