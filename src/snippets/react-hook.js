exports.useState = {
  prefix: '$useStateSnippet',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$3($2)'],
  description: 'React useState',
};

exports.useRef = {
  prefix: '$useRefSnippet',
  body: ['const ${1:ref} = useRef$3(${2:null})'],
  description: 'React useRef',
};

exports.useReducer = {
  prefix: '$useReducerSnippet',
  body: ['const [state, dispatch] = useReducer$3(${1:reducer}, ${2:null})'],
  description: 'React useReducer',
};

exports.useEffect = {
  prefix: '$useEffectSnippet',
  body: ['useEffect$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useEffect',
};

exports.useEffectWithCleanUp = {
  prefix: '$useEffectWithCleanupSnippet',
  body: [
    'useEffect$4(() => {',
    '\t${1:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$2])',
    '',
  ],
  description: 'React useEffect with cleanup',
};

exports.useLayoutEffect = {
  prefix: '$useLayoutEffectSnippet',
  body: ['useLayoutEffect$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useLayoutEffect',
};

exports.useLayoutEffectWithCleanUp = {
  prefix: '$useLayoutEffectWithCleanupSnippet',
  body: [
    'useLayoutEffect$4(() => {',
    '\t${1:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$2])',
    '',
  ],
  description: 'React useLayoutEffect with cleanup',
};

exports.useMemo = {
  prefix: '$useMemoSnippet',
  body: ['useMemo$3(() => ${1:computeValue}, [$2])'],
  description: 'React useMemo',
};

exports.useCallback = {
  prefix: '$useCallbackSnippet',
  body: ['useCallback$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useCallback',
};