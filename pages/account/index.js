import {useEffect, useState} from 'react'
import styles from './account.module.scss'
import jwtDecode from 'jwt-decode'
import { GetUser } from '../../lib/user.lib'
import UserInfos from '../../components/UserInfos/UserInfos'
import AccountLayout from '../../layout/AccountLayout/AccountLayout'
import AccountForm from '../../components/AccountForm/AccountForm'

const Account = () => {
  const [user, setUser] = useState({})
  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token);
    GetUser(decodedToken.id).then(res => {
      if(res.success){
        setUser(res.data)
      }
    })
    return () => {
    }
  }, [])
  
  return (
    <AccountLayout index={1}>
      <div className={styles.account__wrapper}>
        <h1 className={styles.account__title}>Account</h1>
        {showForm? (
          <AccountForm user={user} setShowForm={setShowForm}/>
        ): (
          <>
            <UserInfos user={user}/>
            <div className={styles.account__btn}>
              <button onClick={() => setShowForm(true)}>Update profile</button>
            </div>
          </>
        )}
      </div>
    </AccountLayout>
  )
}

export default Account