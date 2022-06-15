import { CardInterface } from '@cardEditor';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';

const useCardOptions = () => {
  const { state, setState, setCardImgObj, cardImgObj } =
    useContext(CardCreatorContext);

  const stateSetter = useCallback(
    <T>(propertyName: keyof CardInterface) =>
      (value: T) =>
        setState(prev => ({ ...prev, [propertyName]: value })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setName = useMemo(
    () => stateSetter<CardInterface['name']>('name'),
    [stateSetter],
  );
  const setSubname = useMemo(
    () => stateSetter<CardInterface['subname']>('subname'),
    [stateSetter],
  );
  const setDexStats = useMemo(
    () => stateSetter<CardInterface['dexStats']>('dexStats'),
    [stateSetter],
  );
  const setBackgroundImgSrc = useMemo(
    () => stateSetter<CardInterface['backgroundImgSrc']>('backgroundImgSrc'),
    [stateSetter],
  );
  const setImgLayer1Src = useMemo(
    () => stateSetter<CardInterface['imgLayer1Src']>('imgLayer1Src'),
    [stateSetter],
  );
  const setImgLayer2Src = useMemo(
    () => stateSetter<CardInterface['imgLayer2Src']>('imgLayer2Src'),
    [stateSetter],
  );
  const setCustomSetIconSrc = useMemo(
    () => stateSetter<CardInterface['customSetIconSrc']>('customSetIconSrc'),
    [stateSetter],
  );
  const setPrevolveImgSrc = useMemo(
    () => stateSetter<CardInterface['prevolveImgSrc']>('prevolveImgSrc'),
    [stateSetter],
  );
  const setTypeImgSrc = useMemo(
    () => stateSetter<CardInterface['typeImgSrc']>('typeImgSrc'),
    [stateSetter],
  );
  const setTypeImgAmount = useMemo(
    () => stateSetter<CardInterface['typeImgAmount']>('typeImgAmount'),
    [stateSetter],
  );
  const setCardNumber = useMemo(
    () => stateSetter<CardInterface['cardNumber']>('cardNumber'),
    [stateSetter],
  );
  const setTotalInSet = useMemo(
    () => stateSetter<CardInterface['totalInSet']>('totalInSet'),
    [stateSetter],
  );
  const setHitpoints = useMemo(
    () => stateSetter<CardInterface['hitpoints']>('hitpoints'),
    [stateSetter],
  );
  const setIllustrator = useMemo(
    () => stateSetter<CardInterface['illustrator']>('illustrator'),
    [stateSetter],
  );
  const setWeaknessAmount = useMemo(
    () => stateSetter<CardInterface['weaknessAmount']>('weaknessAmount'),
    [stateSetter],
  );
  const setResistanceAmount = useMemo(
    () => stateSetter<CardInterface['resistanceAmount']>('resistanceAmount'),
    [stateSetter],
  );
  const setRetreatCost = useMemo(
    () => stateSetter<CardInterface['retreatCost']>('retreatCost'),
    [stateSetter],
  );
  const setPrevolveName = useMemo(
    () => stateSetter<CardInterface['prevolveName']>('prevolveName'),
    [stateSetter],
  );
  const setDexEntry = useMemo(
    () => stateSetter<CardInterface['dexEntry']>('dexEntry'),
    [stateSetter],
  );
  const setDescription = useMemo(
    () => stateSetter<CardInterface['description']>('description'),
    [stateSetter],
  );
  const setHasAbility = useMemo(
    () => stateSetter<CardInterface['hasAbility']>('hasAbility'),
    [stateSetter],
  );
  const setAbility = useMemo(
    () => stateSetter<CardInterface['ability']>('ability'),
    [stateSetter],
  );
  const setMove1 = useMemo(
    () => stateSetter<CardInterface['move1']>('move1'),
    [stateSetter],
  );
  const setHasMove2 = useMemo(
    () => stateSetter<CardInterface['hasMove2']>('hasMove2'),
    [stateSetter],
  );
  const setMove2 = useMemo(
    () => stateSetter<CardInterface['move2']>('move2'),
    [stateSetter],
  );

  return {
    ...state,
    stateSetter,
    setName,
    setSubname,
    setDexStats,
    setBackgroundImgSrc,
    setImgLayer1Src,
    setImgLayer2Src,
    setCustomSetIconSrc,
    setPrevolveImgSrc,
    setTypeImgSrc,
    setTypeImgAmount,
    setCardNumber,
    setTotalInSet,
    setHitpoints,
    setIllustrator,
    setWeaknessAmount,
    setResistanceAmount,
    setRetreatCost,
    setPrevolveName,
    setDexEntry,
    setDescription,
    setHasAbility,
    setAbility,
    setMove1,
    setHasMove2,
    setMove2,
    cardImgObj,
    setCardImgObj,
  };
};

export default useCardOptions;