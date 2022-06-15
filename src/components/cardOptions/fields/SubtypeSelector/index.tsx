import useSubtype from 'src/features/cardEditor/cardOptions/subtype/hooks/useSubtype';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import ControlledSelector from '@components/inputs/ControlledSelector';
import useType from 'src/features/cardEditor/cardOptions/type/hooks/useType';

const SubtypeSelector: FC = () => {
  const { type } = useType();
  const { hasSubtypes, isSubtypeRequired } = useCardLogic();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = (event: SelectChangeEvent) => {
    setSubtype(Number(event.target.value) ?? undefined);
  };

  if (!hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
    >
      {!isSubtypeRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {subtypes.map(
        st =>
          st.types.includes(type.id) && (
            <MenuItem key={st.slug} value={st.id}>
              <ListItemText primary={st.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default SubtypeSelector;
