import { useState, useMemo, useEffect, useRef, useCallback } from "react";

/**
 * @description hook similar to vue's computed
 * @param {function} fn function to be computed
 * @param {array} deps dependencies
 * @returns {any} computed value
 */
export function useComputed(fn, deps) {
  // with useMemo
  const computed = useMemo(fn, deps);
  return computed;
}

/**
 * @description hook similar to vue's mounted
 * @param {function} fn function to be executed
 * @returns {void} nothing
 */
export const useOnMounted = (fn) => useEffect(fn, []);

/**
 * @description hook similar to vue's unmounted
 * @param {function} fn function to be executed
 * @returns {void} nothing
 */

export const useOnUnmounted = (fn) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => () => fnRef.current(), []);
};

/**
 * @description hook similar to vue's watch
 * @param {function} fn function to be executed
 * @param {array} deps dependencies
 * @returns {void} nothing
 */

let oldVal = null;
export const useWatch = (dep, fn) => {
  oldVal = dep;
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => {
    return () => fnRef.current(dep, oldVal);
  }, [dep]);
};
/**
 * @description hook similar to vue's watchEffect
 * @param {function} fn function to be executed
 * @param {array} deps dependencies
 * @returns {void} nothing
 */

export const useWatchEffect = (fn, deps) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => {
    fnRef.current();
  }, deps);
};

/**
 * @description hook similar to vue's ref
 * @param {any} value value to be referenced
 * @returns {array} [value, setValue]
 */

export const useRefState = (value) => {
  const [state, setState] = useState(value);
  const ref = useRef(state);
  const setRef = useCallback((val) => {
    ref.current = val;
    setState(val);
  }, []);
  return [ref, setRef];
};

/**
 * @description hook similar to vue's reactive
 * @param {object} obj object to be reactive
 * @returns {object} reactive object
 */

export const useReactive = (obj) => {
  const [state, setState] = useState(obj);
  const proxy = useRef(new Proxy(state, { set }));
  function set(target, key, value) {
    target[key] = value;
    setState({ ...target });
    return true;
  }
  return proxy.current;
};
