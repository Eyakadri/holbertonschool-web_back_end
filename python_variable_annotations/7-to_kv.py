#!/usr/bin/env python3
""" complex types - string and int/float to tuple """


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns a tuple of a string and a float
    Args:
        k (str): The string
        v (int, float): The number
    Returns:
        Tuple[str, float]: The tuple of the string and the square of the number
    """
    return (k, v * v)
