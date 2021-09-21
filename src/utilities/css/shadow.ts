import rem from './rem';
import { COLOR } from 'app/constants';

const shadow = (
  blurPrimary: number,
  spreadPrimary: number,
  blurSecondary: number,
  spreadSecondary: number,
  blurTertiary: number,
  spreadTertiary: number,
) =>
  // `0 ${rem(blurPrimary)} ${rem(spreadPrimary)} rgba(0, 0, 0, 20%), 0 ${rem(blurSecondary)} ${rem(spreadSecondary)} rgba(0, 0, 0, 0.2), 0 ${rem(blurTertiary)} ${rem(spreadTertiary)} rgba(0, 0, 0, 0.2)`;
  `0 ${rem(blurPrimary)} ${rem(spreadPrimary)} ${COLOR.shadowBlackPrimary}, 0 ${rem(blurSecondary)} ${rem(spreadSecondary)} ${COLOR.shadowBlackSecondary}, 0 ${rem(blurTertiary)} ${rem(spreadTertiary)} ${COLOR.shadowBlackTertiary}`;

export default shadow;