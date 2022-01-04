import {Request, Response} from 'express';
import {ActiveUserInterface} from '../Data/Models/activeUsers';
import {activeDataService} from '../Services';

export const postActiveData = async (req: Request, res: Response) => {
  const error = {
    statusCode: 500,
    message: 'Unknown',
  };

  try {
    const activeData = req.body.activeData as ActiveUserInterface;

    if (!activeData) {
      error.statusCode = 400;
      error.message = 'No active data provided';
      throw new Error(error.message);
    }

    activeData.userId = req.body.id;
    await activeDataService.set(activeData);
    return res.status(200).json({message: 'Active data has been set'});
  } catch (err) {
    console.log(`error: `, err);
    return res.status(error.statusCode).json({message: error.message});
  }
};

export const patchActiveData = async (req: Request, res: Response) => {
  const error = {
    statusCode: 500,
    message: 'Unknown',
  };

  try {
    // eslint-disable-next-line max-len
    const activeDataUpdate = req.body.activeData as Partial<ActiveUserInterface>;

    if (!activeDataUpdate) {
      error.statusCode = 400;
      error.message = 'No active data provided';
      throw new Error(error.message);
    }

    activeDataUpdate.userId = req.body.id;
    const updateResult = await activeDataService.update(activeDataUpdate);

    if (!updateResult) {
      error.statusCode = 500;
      error.message = 'Error while updating active data';
      throw new Error(error.message);
    }

    return res.status(200).json({
      message: 'Active data has been updated',
      activeData: updateResult,
    });
  } catch (err) {
    console.log(`error: `, err);
    return res.status(error.statusCode).json({message: error.message});
  }
};
