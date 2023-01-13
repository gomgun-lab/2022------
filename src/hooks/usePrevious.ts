import { useNavigate } from "react-router-dom";

const usePrevious = () => {
  const navigate = useNavigate();

  const goPrevious = () => {
    navigate(-1);
  };

  return { goPrevious };
};

export default usePrevious;
