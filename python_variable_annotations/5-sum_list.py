#!/usr/bin/env python3
"""returns the sum of the input list as a float"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """returns the sum of the input list as a float
    Args:
        input_list (list): The list to sum
    Returns:
        float: The sum of the list
    """
    return float(sum(input_list))
