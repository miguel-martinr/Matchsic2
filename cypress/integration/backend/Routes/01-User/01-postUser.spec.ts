import * as mongoose from "mongoose";
import { UserModel } from "../../../../../backend/src/Data/Models/user";

describe ('Posting a new user', () => {
  
  it('It should be able to register a new user', () => {
    
    const request = {
      user: {
        name: 'Vinicius Jr',
        username: 'ViniJr',
        email: 'vinijr@rmadrid.com',
        password: '123456',
      }
    };

    return cy.request('POST', '/user', request).then(async res => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Welcome to Matchsic, ViniJr!');
      const User = mongoose.model('users');
      const user = await User.findOne({username: 'ViniJr'});
      expect(user).to.not.be.null;
    });
  });
});