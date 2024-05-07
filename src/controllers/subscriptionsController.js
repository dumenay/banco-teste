import { Op } from 'sequelize';
import Subscriptions from '../models/Subscriptions';

const get = async (req, res) => {
  try {
    const iduser = req.params.iduser ? req.params.iduser.toString().replace(/\D/g, '') : null;
    const idsub = req.params.idsub ? req.params.idsub.toString().replace(/\D/g, '') : null;

    if (!iduser || !idsub) {
      const response = await Subscriptions.findAll();
      return res.status(200).send({
        message: 'Dados Encontrados',
        response,
      });
    }

    const response = await Subscriptions.findOne({
      where: {
        [Op.and]: [
          {
            idUsers: {
              [Op.eq]: iduser,
            },
          },
          {
            idSubscription: {
              [Op.eq]: idsub,
            },
          },
        ],
      },
    });
    return res.status(200).send({
      message: 'Dados Encontrados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const { idUsers, idSubscription, dateSubscription } = req.body;
    const response = await Subscriptions.create(
      {
        idUsers,
        idSubscription,
        dateSubscription,
      },
    );
    return res.status(200).send({
      message: 'Dados Criados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const iduser = req.params.iduser ? req.params.iduser.toString().replace(/\D/g, '') : null;
    const idsub = req.params.idsub ? req.params.idsub.toString().replace(/\D/g, '') : null;

    if (!iduser || !idsub) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Subscriptions.findOne({
      where: {
        [Op.and]: [
          {
            idUsers: {
              [Op.eq]: iduser,
            },
          },
          {
            idSubscription: {
              [Op.eq]: idsub,
            },
          },
        ],
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const iduser = req.params.iduser ? req.params.iduser.toString().replace(/\D/g, '') : null;
    const idsub = req.params.idsub ? req.params.idsub.toString().replace(/\D/g, '') : null;

    if (!iduser || !idsub) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Subscriptions.findOne({
      where: {
        [Op.and]: [
          {
            idUsers: {
              [Op.eq]: iduser,
            },
          },
          {
            idSubscription: {
              [Op.eq]: idsub,
            },
          },
        ],
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }
    await response.destroy();
    return res.status(200).send({
      message: 'Dados Destruidos',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
