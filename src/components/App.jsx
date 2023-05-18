import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ProfileCard } from './Profile/ProfileCard';
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendsList } from './Friends/FriendsList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transaction/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';

export const App = () => {
  return (
      <Layout>
      <ProfileCard userInfo={user} />
      <StatisticsList title="Upload stats" items={data} />
      <FriendsList items={friends} />
      <TransactionHistory data={transactions} />
        <GlobalStyle />
        </Layout>
  );
};
