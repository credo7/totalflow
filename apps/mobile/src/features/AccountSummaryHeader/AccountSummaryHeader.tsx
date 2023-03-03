import {HStack} from '../../components/StyledComponents';
import {FinancialBlock} from './FinancialBlock';

const AccountSummaryHeader = () => (
    <HStack>
        <FinancialBlock title="Expenses" amount={0} />
        <FinancialBlock title="Balance" amount={1200} />
        <FinancialBlock title="Income" amount={12000} />
    </HStack>
);

export default AccountSummaryHeader;
