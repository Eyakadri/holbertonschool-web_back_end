#!/usr/bin/env python3
"""module for annotating list operations with their types"""


from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """Returns a list of tuples
    Args:
        lst (List[str]): List of strings to process
    Returns:
        List[Tuple[str, int]]: List of tuples
    """
    return [(i, len(i)) for i in lst]
