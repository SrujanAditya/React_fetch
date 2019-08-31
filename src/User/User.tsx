import React from 'react';
import './User.scss';

export interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

function User(props:{user: UserDetails}) {

  return (
    <section className="user-detail">
      <table>
        <tbody>
          <tr>
            <td className='label user'>User Name</td>
            <td className='values'>{props.user.username}</td>
          </tr>
          <tr>
            <td className='label name'>Name</td>
            <td className='values'>{props.user.name}</td>
          </tr>
          <tr>
            <td className='label email'>Email</td>
            <td className='values'>{props.user.email}</td>
          </tr>
          <tr>
            <td className='label site'>Website</td>
            <td className='values'>{props.user.website}</td>
          </tr>
          <tr>
            <td className='label company'>Company</td>
            <td className='values'>
              <table className="no-collapse">
                <tbody>
                  <tr className="">
                    <td className='label'>Name</td>
                    <td className='values'>{props.user.company.name}</td>
                  </tr>
                  <tr className="">
                    <td className='label'>Catch Phrase</td>
                    <td className='values'>{props.user.company.catchPhrase}</td>
                    </tr>
                  <tr className="">
                    <td className='label'>BS</td>
                    <td className='values'>{props.user.company.bs}</td>
                  </tr>
                </tbody>
              </table>
              
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default User;
