import { Typography, Link as MuiLink } from '@mui/material';
import { Paragraph } from '~/components/Text'

export const MdxMuiComponents = {
  h1: (props: any) => <Typography variant="h2" {...props} />,
  h2: (props: any) => <Typography variant="h3" {...props} />,
  h3: (props: any) => <Typography variant="h4" {...props} />,
  h4: (props: any) => <Typography variant="h5" {...props} />,
  h5: (props: any) => <Typography variant="h6" {...props} />,
  h6: (props: any) => <Typography variant="h7" {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  a: (props: any) => <MuiLink {...props} />,
//   ul: (props: any) => <BulletList {...props} />,
//   li: (props: any) => <TextItem {...props} />,
};
