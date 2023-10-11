import React from 'react'
import styles from './SendMessage.module.css'
import avatar from '../../images/avatar.png'
import { useParams } from 'react-router-dom'

export default function SendMessage() {

  let params = useParams()
  console.log(params);
  return (
<div>
  <div className="container text-center py-5 my-5 text-center">
    <div className="card py-5 mb-5">
      <a data-toggle="modal" data-target="#profile">
        <img src={avatar} className="avatar " alt="profile pic" />
      </a>
      <h3 className="py-2">profile name</h3>
      <div className="container w-50 m-auto">
        <form>
          <textarea className="form-control" cols={10} rows={9} placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)" defaultValue={""} />
          <button className="btn btn-outline-info mt-3"><i className="far fa-paper-plane" /> Send</button>
        </form>
      </div>
    </div>
    <button data-toggle="modal" data-target="#share" className="btn btn-default-outline share "><i className="fas fa-share-alt" />  Share Profile</button>
  </div>
  {/*  Share profile Modal */}
  <div className="modal fade" id="share" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Share Profile</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>host/messages/id</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
