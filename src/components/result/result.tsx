import * as React from 'react'
import classnames from 'classnames'
import EmptyError from '../../assets/empty_error.svg'
import EmptySignal from '../../assets/empty_signal.svg'
import EmptyText from '../../assets/empty_text.svg'
import EmptySearch from '../../assets/empty_search.svg'
import ResultBan from '../../assets/result_ban.svg'
import ResultError from '../../assets/result_error.svg'
import ResultQuestion from '../../assets/result_question.svg'
import ResultWarn from '../../assets/result_warn.svg'
import ResultSuccess from '../../assets/result_success.svg'

const icons: any = {
  EmptyError,
  EmptySignal,
  EmptyText,
  EmptySearch,
  ResultBan,
  ResultError,
  ResultQuestion,
  ResultWarn,
  ResultSuccess,
}
const prefixCls = 'fam-result'

export interface ResultProps {
  className?: string;
  style?: object;
  imgUrl?: string;
  imgType?: string;
  img?: React.ReactElement<any> | null;
  title?: React.ReactNode;
  message?: React.ReactNode;
  expandNode?: React.ReactNode;
  empty?: boolean;
  onClick?: () => void;
}

const Result: React.FC<ResultProps> = props => {

  const {
    className,
    style,
    title,
    message,
    img,
    imgUrl,
    imgType,
    expandNode,
    empty = false,
  } = props;

  const wrapCls = classnames(prefixCls, className);

  let imgContent: JSX.Element | null = null;

  if (img) {
    // 插图 - 节点
    imgContent = <div className={`${prefixCls}-img`}>{img}</div>;
  } else if (imgUrl) {
    // 插图 - 地址
    imgContent = (
      <div className={empty ? `${prefixCls}-empty-img` : `${prefixCls}-img`} style={{ backgroundImage: `url(${imgUrl})` }} />
    );
  } else if (imgType) {
    // 插图 - 默认
    imgContent = (
      <img className={empty ? `${prefixCls}-empty-img` : `${prefixCls}-img`} src={icons[imgType]} />
    );
  }

  return (
    <div className={wrapCls} style={style}>
      { imgContent }
      {
        title && (
          <div className={`${prefixCls}-title`}>
            { title }
          </div>
        )
      }
      {
        message && (
          <div className={`${prefixCls}-message`}>
            { message }
          </div>
        )
      }
      {/* 扩展节点 */
        expandNode && (
          <div className={`${prefixCls}-expand`}>
            { expandNode }
          </div>
        )
      }

    </div>
  )
}

export default Result;