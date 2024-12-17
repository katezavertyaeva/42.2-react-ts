import { useNavigate } from 'react-router-dom';

import { GoBackWrapper } from './styles';
import Button from 'components/Button/Button';

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <GoBackWrapper>
      <Button name='Go Back' onClick={goBack} />
    </GoBackWrapper>
  )
}

export default GoBack;