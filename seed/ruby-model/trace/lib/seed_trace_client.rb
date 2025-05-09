# frozen_string_literal: true

require_relative "seed_trace_client/admin/types/test"
require_relative "seed_trace_client/commons/types/variable_type"
require_relative "seed_trace_client/commons/types/list_type"
require_relative "seed_trace_client/commons/types/map_type"
require_relative "seed_trace_client/commons/types/variable_value"
require_relative "seed_trace_client/commons/types/debug_variable_value"
require_relative "seed_trace_client/commons/types/generic_value"
require_relative "seed_trace_client/commons/types/map_value"
require_relative "seed_trace_client/commons/types/key_value_pair"
require_relative "seed_trace_client/commons/types/binary_tree_value"
require_relative "seed_trace_client/commons/types/binary_tree_node_value"
require_relative "seed_trace_client/commons/types/binary_tree_node_and_tree_value"
require_relative "seed_trace_client/commons/types/singly_linked_list_value"
require_relative "seed_trace_client/commons/types/singly_linked_list_node_value"
require_relative "seed_trace_client/commons/types/singly_linked_list_node_and_list_value"
require_relative "seed_trace_client/commons/types/doubly_linked_list_value"
require_relative "seed_trace_client/commons/types/doubly_linked_list_node_value"
require_relative "seed_trace_client/commons/types/doubly_linked_list_node_and_list_value"
require_relative "seed_trace_client/commons/types/debug_map_value"
require_relative "seed_trace_client/commons/types/debug_key_value_pairs"
require_relative "seed_trace_client/commons/types/test_case"
require_relative "seed_trace_client/commons/types/test_case_with_expected_result"
require_relative "seed_trace_client/commons/types/file_info"
require_relative "seed_trace_client/commons/types/language"
require_relative "seed_trace_client/lang_server/types/lang_server_request"
require_relative "seed_trace_client/lang_server/types/lang_server_response"
require_relative "seed_trace_client/migration/types/migration_status"
require_relative "seed_trace_client/migration/types/migration"
require_relative "seed_trace_client/playlist/types/playlist"
require_relative "seed_trace_client/playlist/types/playlist_create_request"
require_relative "seed_trace_client/playlist/types/update_playlist_request"
require_relative "seed_trace_client/playlist/types/playlist_id_not_found_error_body"
require_relative "seed_trace_client/playlist/types/reserved_keyword_enum"
require_relative "seed_trace_client/problem/types/problem_info"
require_relative "seed_trace_client/problem/types/problem_description"
require_relative "seed_trace_client/problem/types/problem_description_board"
require_relative "seed_trace_client/problem/types/problem_files"
require_relative "seed_trace_client/problem/types/variable_type_and_name"
require_relative "seed_trace_client/problem/types/create_problem_request"
require_relative "seed_trace_client/problem/types/create_problem_response"
require_relative "seed_trace_client/problem/types/update_problem_response"
require_relative "seed_trace_client/problem/types/create_problem_error"
require_relative "seed_trace_client/problem/types/generic_create_problem_error"
require_relative "seed_trace_client/problem/types/get_default_starter_files_response"
require_relative "seed_trace_client/submission/types/submission_request"
require_relative "seed_trace_client/submission/types/initialize_problem_request"
require_relative "seed_trace_client/submission/types/submit_request_v_2"
require_relative "seed_trace_client/submission/types/workspace_submit_request"
require_relative "seed_trace_client/submission/types/submission_file_info"
require_relative "seed_trace_client/submission/types/submission_type_enum"
require_relative "seed_trace_client/submission/types/stop_request"
require_relative "seed_trace_client/submission/types/submission_response"
require_relative "seed_trace_client/submission/types/code_execution_update"
require_relative "seed_trace_client/submission/types/building_executor_response"
require_relative "seed_trace_client/submission/types/running_response"
require_relative "seed_trace_client/submission/types/running_submission_state"
require_relative "seed_trace_client/submission/types/errored_response"
require_relative "seed_trace_client/submission/types/error_info"
require_relative "seed_trace_client/submission/types/compile_error"
require_relative "seed_trace_client/submission/types/runtime_error"
require_relative "seed_trace_client/submission/types/internal_error"
require_relative "seed_trace_client/submission/types/stopped_response"
require_relative "seed_trace_client/submission/types/workspace_ran_response"
require_relative "seed_trace_client/submission/types/workspace_run_details"
require_relative "seed_trace_client/submission/types/graded_response"
require_relative "seed_trace_client/submission/types/graded_response_v_2"
require_relative "seed_trace_client/submission/types/test_case_grade"
require_relative "seed_trace_client/submission/types/test_case_hidden_grade"
require_relative "seed_trace_client/submission/types/test_case_non_hidden_grade"
require_relative "seed_trace_client/submission/types/recorded_response_notification"
require_relative "seed_trace_client/submission/types/recording_response_notification"
require_relative "seed_trace_client/submission/types/lightweight_stackframe_information"
require_relative "seed_trace_client/submission/types/test_case_result_with_stdout"
require_relative "seed_trace_client/submission/types/test_case_result"
require_relative "seed_trace_client/submission/types/actual_result"
require_relative "seed_trace_client/submission/types/exception_v_2"
require_relative "seed_trace_client/submission/types/exception_info"
require_relative "seed_trace_client/submission/types/invalid_request_response"
require_relative "seed_trace_client/submission/types/invalid_request_cause"
require_relative "seed_trace_client/submission/types/existing_submission_executing"
require_relative "seed_trace_client/submission/types/submission_id_not_found"
require_relative "seed_trace_client/submission/types/custom_test_cases_unsupported"
require_relative "seed_trace_client/submission/types/unexpected_language_error"
require_relative "seed_trace_client/submission/types/terminated_response"
require_relative "seed_trace_client/submission/types/finished_response"
require_relative "seed_trace_client/submission/types/stdout_response"
require_relative "seed_trace_client/submission/types/stderr_response"
require_relative "seed_trace_client/submission/types/trace_response"
require_relative "seed_trace_client/submission/types/trace_response_v_2"
require_relative "seed_trace_client/submission/types/traced_file"
require_relative "seed_trace_client/submission/types/expression_location"
require_relative "seed_trace_client/submission/types/stack_information"
require_relative "seed_trace_client/submission/types/stack_frame"
require_relative "seed_trace_client/submission/types/scope"
require_relative "seed_trace_client/submission/types/execution_session_response"
require_relative "seed_trace_client/submission/types/execution_session_status"
require_relative "seed_trace_client/submission/types/submission_status_v_2"
require_relative "seed_trace_client/submission/types/test_submission_status_v_2"
require_relative "seed_trace_client/submission/types/workspace_submission_status_v_2"
require_relative "seed_trace_client/submission/types/test_submission_update"
require_relative "seed_trace_client/submission/types/test_submission_update_info"
require_relative "seed_trace_client/submission/types/workspace_submission_update"
require_relative "seed_trace_client/submission/types/workspace_submission_update_info"
require_relative "seed_trace_client/submission/types/graded_test_case_update"
require_relative "seed_trace_client/submission/types/recorded_test_case_update"
require_relative "seed_trace_client/submission/types/workspace_traced_update"
require_relative "seed_trace_client/submission/types/submission_type_state"
require_relative "seed_trace_client/submission/types/workspace_submission_state"
require_relative "seed_trace_client/submission/types/workspace_submission_status"
require_relative "seed_trace_client/submission/types/test_submission_state"
require_relative "seed_trace_client/submission/types/test_submission_status"
require_relative "seed_trace_client/submission/types/submission_status_for_test_case"
require_relative "seed_trace_client/submission/types/traced_test_case"
require_relative "seed_trace_client/submission/types/trace_responses_page"
require_relative "seed_trace_client/submission/types/trace_responses_page_v_2"
require_relative "seed_trace_client/submission/types/get_trace_responses_page_request"
require_relative "seed_trace_client/submission/types/workspace_starter_files_response"
require_relative "seed_trace_client/submission/types/workspace_starter_files_response_v_2"
require_relative "seed_trace_client/submission/types/workspace_files"
require_relative "seed_trace_client/submission/types/execution_session_state"
require_relative "seed_trace_client/submission/types/get_execution_session_state_response"
require_relative "seed_trace_client/submission/types/get_submission_state_response"
require_relative "seed_trace_client/v_2/problem/types/problem_info_v_2"
require_relative "seed_trace_client/v_2/problem/types/lightweight_problem_info_v_2"
require_relative "seed_trace_client/v_2/problem/types/create_problem_request_v_2"
require_relative "seed_trace_client/v_2/problem/types/test_case_v_2"
require_relative "seed_trace_client/v_2/problem/types/test_case_expects"
require_relative "seed_trace_client/v_2/problem/types/test_case_implementation_reference"
require_relative "seed_trace_client/v_2/problem/types/basic_test_case_template"
require_relative "seed_trace_client/v_2/problem/types/test_case_template"
require_relative "seed_trace_client/v_2/problem/types/test_case_implementation"
require_relative "seed_trace_client/v_2/problem/types/test_case_function"
require_relative "seed_trace_client/v_2/problem/types/test_case_with_actual_result_implementation"
require_relative "seed_trace_client/v_2/problem/types/void_function_definition"
require_relative "seed_trace_client/v_2/problem/types/parameter"
require_relative "seed_trace_client/v_2/problem/types/non_void_function_definition"
require_relative "seed_trace_client/v_2/problem/types/void_function_signature"
require_relative "seed_trace_client/v_2/problem/types/non_void_function_signature"
require_relative "seed_trace_client/v_2/problem/types/void_function_signature_that_takes_actual_result"
require_relative "seed_trace_client/v_2/problem/types/assert_correctness_check"
require_relative "seed_trace_client/v_2/problem/types/deep_equality_correctness_check"
require_relative "seed_trace_client/v_2/problem/types/void_function_definition_that_takes_actual_result"
require_relative "seed_trace_client/v_2/problem/types/test_case_implementation_description"
require_relative "seed_trace_client/v_2/problem/types/test_case_implementation_description_board"
require_relative "seed_trace_client/v_2/problem/types/test_case_metadata"
require_relative "seed_trace_client/v_2/problem/types/function_implementation_for_multiple_languages"
require_relative "seed_trace_client/v_2/problem/types/function_implementation"
require_relative "seed_trace_client/v_2/problem/types/generated_files"
require_relative "seed_trace_client/v_2/problem/types/custom_files"
require_relative "seed_trace_client/v_2/problem/types/basic_custom_files"
require_relative "seed_trace_client/v_2/problem/types/files"
require_relative "seed_trace_client/v_2/problem/types/file_info_v_2"
require_relative "seed_trace_client/v_2/problem/types/default_provided_file"
require_relative "seed_trace_client/v_2/problem/types/function_signature"
require_relative "seed_trace_client/v_2/problem/types/get_function_signature_request"
require_relative "seed_trace_client/v_2/problem/types/get_function_signature_response"
require_relative "seed_trace_client/v_2/problem/types/get_basic_solution_file_request"
require_relative "seed_trace_client/v_2/problem/types/get_basic_solution_file_response"
require_relative "seed_trace_client/v_2/problem/types/get_generated_test_case_file_request"
require_relative "seed_trace_client/v_2/problem/types/get_generated_test_case_template_file_request"
require_relative "seed_trace_client/v_2/v_3/problem/types/problem_info_v_2"
require_relative "seed_trace_client/v_2/v_3/problem/types/lightweight_problem_info_v_2"
require_relative "seed_trace_client/v_2/v_3/problem/types/create_problem_request_v_2"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_v_2"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_expects"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_implementation_reference"
require_relative "seed_trace_client/v_2/v_3/problem/types/basic_test_case_template"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_template"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_implementation"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_function"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_with_actual_result_implementation"
require_relative "seed_trace_client/v_2/v_3/problem/types/void_function_definition"
require_relative "seed_trace_client/v_2/v_3/problem/types/parameter"
require_relative "seed_trace_client/v_2/v_3/problem/types/non_void_function_definition"
require_relative "seed_trace_client/v_2/v_3/problem/types/void_function_signature"
require_relative "seed_trace_client/v_2/v_3/problem/types/non_void_function_signature"
require_relative "seed_trace_client/v_2/v_3/problem/types/void_function_signature_that_takes_actual_result"
require_relative "seed_trace_client/v_2/v_3/problem/types/assert_correctness_check"
require_relative "seed_trace_client/v_2/v_3/problem/types/deep_equality_correctness_check"
require_relative "seed_trace_client/v_2/v_3/problem/types/void_function_definition_that_takes_actual_result"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_implementation_description"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_implementation_description_board"
require_relative "seed_trace_client/v_2/v_3/problem/types/test_case_metadata"
require_relative "seed_trace_client/v_2/v_3/problem/types/function_implementation_for_multiple_languages"
require_relative "seed_trace_client/v_2/v_3/problem/types/function_implementation"
require_relative "seed_trace_client/v_2/v_3/problem/types/generated_files"
require_relative "seed_trace_client/v_2/v_3/problem/types/custom_files"
require_relative "seed_trace_client/v_2/v_3/problem/types/basic_custom_files"
require_relative "seed_trace_client/v_2/v_3/problem/types/files"
require_relative "seed_trace_client/v_2/v_3/problem/types/file_info_v_2"
require_relative "seed_trace_client/v_2/v_3/problem/types/default_provided_file"
require_relative "seed_trace_client/v_2/v_3/problem/types/function_signature"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_function_signature_request"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_function_signature_response"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_basic_solution_file_request"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_basic_solution_file_response"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_generated_test_case_file_request"
require_relative "seed_trace_client/v_2/v_3/problem/types/get_generated_test_case_template_file_request"
