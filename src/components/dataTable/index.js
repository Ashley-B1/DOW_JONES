import './dataTable.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import myAccounts from '../../data';
import { useState } from 'react';

const DataTable = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const res = await myAccounts;
    return res;
  }

  fetchAccounts()
    .then((res) => setAccounts(res));

  return (
    <div className='data_container'>
      <section className='acct_sect'>
        <header className='acct_header'>
          <div className='acct_title'>Account</div>
          <div className='acct_bal'>
            <div className='bal_title'><MdKeyboardArrowUp /> Available Cash</div>
            <div className='bal_sub'>Today's Change</div>
          </div>
        </header>
        <div className='acct_list'>
          {accounts.map((account) => (
            <div className='acct_item' key={account.id}>
              <div className='acct_name'>{`${account.type} ${account.accountNumber}`}</div>
              <div className='acct_bal'>
                {account.balance}
                <span>{`${account.change} / ${account.changeTotal}`}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DataTable
